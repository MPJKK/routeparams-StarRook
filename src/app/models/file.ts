export class File {
  constructor(
      public file_id: number,
      public title: string,
      public user_id: number,
      public media_type: string,
      public thumbnails: any,
      public mime_type: string,
      public filename: string,
      public description?: string
      ) {
  }
}
