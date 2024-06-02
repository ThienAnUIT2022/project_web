# 🌍 Vietnam Backpacking Website
Visit our [website](https://vn-backpacking.vercel.app).

## 🖼️ Screenshots
![Home Page](/project-web-app/front-end/src/assets/images/Homepage.png)
*Home Page*

![Search Results](/project-web-app/front-end/src/assets/images/Destination.png)
*Search Results*

![Trip Planner](/project-web-app/front-end/src/assets/images/Schedule.png)
*Trip Planner*

Vietnam Backpacking Website is a project developed by group 5, class NT208.O23.ANTT. This website helps users discover travel destinations in Vietnam, create travel plans, and manage trips.

## 👥 Members
- Phạm Trường Thiên Ân 22520028
- Nguyễn Hữu Bình 22520132
- Trần Tuấn Anh 22520080
- Lăng Thị Cẩm Nhung 22521057
- Phạm Trần Hồng Phúc 22521138

## ✨ Features
- **🔍 Search for destinations**: Search by place name, filter by geography, transportation, and cost.
- **⭐ Add to favorites**: Save locations to your favorites list to review and schedule trips.
- **📝 Blog site for locations**: Access detailed blog posts about various destinations.
- **📅 Google Calendar integration**: Add trip plans directly to your Google Calendar.
- **🔗 Share with others**: Share the link to others to join your trip.

## ⚙️ Setup Instructions

### 📋 Prerequisites
- Node.js (note that we use "react" and "react-dom" in version "17.0.2")
- npm (Node Package Manager)

### 📥 Installation
1. **Clone the repository:**
    ```sh
    git clone https://github.com/ThienAnUIT2022/project_web.git
    cd Project_Web/project-web-app
    ```
    - There are three folders: front-end (React + Bootstrap), back-end (Express + MySQL), database (Strapi). You can start front-end and back-end with "npm start". You might need to install XAMPP or MySQL Workbench to run at localhost. For the database (Strapi), start it with "npm run develop".
   
3. **Install dependencies:**
    ```sh
    npm install
    ```

    And use the above command with this package list:

    - `@fortawesome/free-solid-svg-icons`
    - `@fortawesome/react-fontawesome`
    - `@fullcalendar/daygrid`
    - `@fullcalendar/react`
    - `@react-oauth/google`
    - `@testing-library/jest-dom`
    - `@testing-library/react`
    - `@testing-library/user-event`
    - `axios`
    - `crypto-browserify`
    - `date-fns`
    - `dotenv`
    - `express`
    - `fullcalendar`
    - `gapi-script`
    - `googleapis`
    - `js-cookie`
    - `jsonwebtoken`
    - `jwt-decode`
    - `os-browserify`
    - `path-browserify`
    - `react`
    - `react-dom`
    - `react-google-calendar-api`
    - `react-modal`
    - `react-router-dom`
    - `react-scripts`
    - `use-places-autocomplete`
    - `web-vitals`

### 🚀 Deployment
1. **Build the project:**
    ```sh
    npm run build
    ```

2. **Deploy the build to your preferred hosting service.**
   We deploy the front-end using Vercel, the back-end using Render, and the database using Strapi cloud. You can try it: [Front-end](https://vercel.com/guides/deploying-react-with-vercel), [Back-end](https://docs.render.com/deploy-node-express-app), and [Database](https://docs.strapi.io/dev-docs/deployment).

### 🧪 Running Tests
To run tests, use the following command:
```sh
npm test
```

### 🛠️ Development Dependencies
- `@babel/plugin-proposal-private-property-in-object`
- `@babel/plugin-transform-private-property-in-object`
- `@iconify/react`
- `gh-pages`

## 🤝 Contributing
We welcome contributions! Please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
    ```sh
    git branch <branch-name>
    git checkout <branch-name>
    ```
3. **Make your changes and commit them:**
    ```sh
    git commit -m "Your message"
    ```
4. **Push to the branch:**
    ```sh
    git push origin <branch-name>
    ```
5. **Create a pull request.**

## 🐛 Reporting Issues
If you find any issues, please create a new issue on GitHub or contact us at thienanfa4869@gmail.com.

## 📄 License
This project is licensed under the MIT License.
