const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

class FileService {
  ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  scheduleFileCleanup(filePath, delayMs = 60000) {
    setTimeout(async () => {
      await this.cleanupFile(filePath);
    }, delayMs);
  }

  async cleanupFile(filePath, retries = 3, delay = 1000) {
    const absolutePath = path.resolve(filePath);
    
    for (let i = 0; i < retries; i++) {
      try {
        await fsPromises.access(absolutePath, fs.constants.F_OK);
        await fsPromises.unlink(absolutePath);
        // console.log(`Successfully deleted file: ${absolutePath}`);
        return;
      } catch (err) {
        if (err.code === 'ENOENT') {
          // File doesn't exist - nothing to delete
          return;
        }
        
        if (i === retries - 1) {
          // console.error(`Failed to delete ${absolutePath} after ${retries} attempts:`, err);
        } else {
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
  }
}

module.exports = new FileService();