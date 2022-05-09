![cover](.github/capa-feedback-widget.jpg?style=flat)

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=0A1033">
  <img src="https://img.shields.io/static/v1?label=NLW&message=08&color=8257E5&labelColor=0A1033" alt="NLW 06" />
</p>

## 💻 Project
Application for help final users when something happen on your web page, making possible send feedbacks about bugs, ideas or others things with one screenshot and comment.

## ✨ Technologies

-   [ ] React
-   [ ] Typescript
-   [ ] TailwindCSS
-   [ ] Axios
-   [ ] Express
-   [ ] Cors
-   [ ] Prisma
-   [ ] Jest

## 🚀 Deploy

-   [ ] Vercel
-   [ ] Railway

## 🔖 Layout

You can view the project layout through [this link](https://www.figma.com/community/file/1102912516166573468). It's necessary have account on [Figma](http://figma.com/) to access.

## Running the project

### Firt Step [Install dependencies]

On ./nlw-feedback-widget-web directory
```cl
npm install
```

On ./nlw-feedback-widget-web/server directory
```cl
npm install
```

### Second Step [Config env file]

Create ```.env.local``` on ./nlw-feedback-widget-web directory and put this variable:
```cl
VITE_API_URL=http://localhost:3333
```

### Third Step [Config Prisma Database]

Actually, this project is at deploy using POSTGRESQL, but for testing on your localhost, you can change for SQLITE:

//But you can use POSTGRESQL if you want. In this case, you need config this database with prisma [see more](https://www.prisma.io/docs/concepts/database-connectors/postgresql).

Find ```schema.prisma``` in ./server directory and change the provider:
```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

Find ```migration_lock.toml``` in ./server/migrations and change this provider to:
```ci
provider = "sqlite"
```

Finally, put this command on your terminal in ./server directory:
```ci
npx prisma migrate dev
```

### Last Step [Run]

For finally run this project:

On ./nlw-feedback-widget-web for run vite server:
```ci
npm run dev
```

On ./nlw-feedback-widget-web/server for run server back-end:
```ci
npm run dev
```

Open on your browser this URL: [localhost:3000](http://localhost:3000)

## 📄 Licença

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.