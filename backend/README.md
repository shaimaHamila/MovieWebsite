# Migration

1. Create migration called init :
   `sh npx prisma migrate dev --name "init"`
2. Deploy migrations to DB :
   `sh npx prisma migrate deploy`
3. Upload seeds dummies data to DB :
   `sh npx prisma db seed`
