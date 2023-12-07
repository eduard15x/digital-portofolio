/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    v2.config({
      cloud_name: 'dhauadbhh',
      api_key: '625624374524796',
      api_secret: 'UCTDMimHUQMwRduFfUhKpJ8d5WQ',
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
