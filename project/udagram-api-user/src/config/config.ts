export const config = {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "aws_profile": process.env.AWS_PROFILE,
    "url": process.env.URL,
    "jwt":
        {
          "secret":process.env.JWT_SECRET
        }
};
