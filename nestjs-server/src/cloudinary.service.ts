/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

const CLOUD_NAME=process.env.CLOUD_NAME;
const CLOUD_KEY=process.env.CLOUD_KEY;
const CLOUD_SECRET=process.env.CLOUD_SECRET;

@Injectable()
export class CloudinaryService {
  constructor() {
    v2.config({
      cloud_name: CLOUD_NAME,
      api_key: CLOUD_KEY,
      api_secret: CLOUD_SECRET,
    });
  }

  async uploadImage(
    filePath: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      v2.uploader.upload(filePath, { folder: 'portofolio-nest-crud' }, (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      });
    });
  }
}
