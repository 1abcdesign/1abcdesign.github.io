import Client from 'ssh2-sftp-client';
import path from 'path';
import fs from 'fs';
import 'dotenv/config';

const sftp = new Client();

const config = {
  host: process.env.HOST, // Replace with GoDaddy host
  username: process.env.USERNAME, // Replace with GoDaddy username
  password: process.env.PASSWORD, // Replace with GoDaddy password
  port: process.env.PORT || '22' // Default SSH port
};

const localDistPath = path.resolve('./dist');
const remotePath = process.env.REMOTE_PATH || '/public_html'; // Replace with your GoDaddy hosting directory

async function deploy() {
  try {
    console.log('Connecting to server...');
    await sftp.connect(config);

    console.log('Clearing remote directory...');
    await sftp.rmdir(remotePath, true);

    console.log('Uploading files...');
    await uploadDirectory(localDistPath, remotePath);

    console.log('Deployment complete!');
  } catch (err) {
    console.error('Deployment failed:', err);
  } finally {
    sftp.end();
  }
}

async function uploadDirectory(localDir, remoteDir) {
  const files = fs.readdirSync(localDir);
  for (const file of files) {
    const localFilePath = path.join(localDir, file);
    const remoteFilePath = `${remoteDir}/${file}`;
    const stats = fs.statSync(localFilePath);

    if (stats.isDirectory()) {
      await sftp.mkdir(remoteFilePath, true);
      await uploadDirectory(localFilePath, remoteFilePath);
    } else {
      await sftp.put(localFilePath, remoteFilePath);
    }
  }
}

deploy();
