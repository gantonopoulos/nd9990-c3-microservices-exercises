export const config = {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
    "image_filter_server": process.env.IMAGE_FILTER_SRV,
    "url": process.env,URL,
    "jwt":
        {
          "secret":process.env.JWT_SECRET
        }
};
