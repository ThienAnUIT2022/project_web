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

## Questions received from other groups:
1. Jquery is a framework or library. What can jquery do that JS cannot do?
2. What are the outstanding advantages of using Jquery compared to using frameworks and other libraries?
Do you think Jquery will die? Who uses it now?
## Answer the question above:
1. - **jQuery** is a **library**, not a framework. It is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
   - **Cross-browser compatibility**: jQuery handles cross-browser inconsistencies, allowing developers to write code without worrying about differences in browser implementations.
   - **DOM manipulation**: jQuery provides a simpler and more intuitive syntax for selecting and manipulating DOM elements.
   ```javascript
      // jQuery
      $('#element').hide();

      // Plain JavaScript
      document.getElementById('element').style.display = 'none';
   ```
   - **Event handling**: jQuery makes event handling straightforward with methods like .on() and .off().
   ```
   // jQuery
    $('#button').on('click', function() { alert('Clicked!'); });

    // Plain JavaScript
    document.getElementById('button').addEventListener('click', function() { alert('Clicked!'); });
    ```
   - **Ajax calls**: jQuery simplifies Ajax requests with methods like $.ajax(), $.get(), and $.post().
   ```
   // jQuery
    $.get('url', function(data) {
      console.log(data);
    });
    
    // Plain JavaScript
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'url', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200)
        console.log(xhr.responseText);
    };
    xhr.send();
   ```
2. - **Simplicity**: jQuery has a very simple and readable syntax, making it easy to learn and use.
   - **Cross-browser compatibility**: It handles many cross-browser issues automatically.
   - **Lightweight**: Although there are lighter alternatives now, jQuery is still relatively small and doesn't add significant overhead.
   - **Rich plugins ecosystem**: There is a vast collection of plugins available for jQuery that can add a lot of functionality without much effort.
   - **Community and support**: jQuery has been around for a long time, resulting in a large community and plenty of resources (documentation, tutorials, forums) available.
   - **Backward compatibility**: jQuery supports older browsers that modern frameworks and libraries may not support.
3. While jQuery's popularity has declined with the rise of modern JavaScript frameworks like **React**, **Angular**, and **Vue.js**, it is unlikely to "die" completely in the near future for several reasons:
   - **Legacy projects**: Many older projects were built using jQuery, and these projects will continue to use it for maintenance and updates.
   - **Learning curve**: jQuery remains a go-to for beginners because of its simplicity and the vast amount of learning resources available.
   - **Specific use cases**: For small projects or simple tasks, jQuery can still be more efficient than setting up a full-fledged framework.
   - **Plugins**: Some plugins and third-party tools still rely on jQuery.
   Who Uses jQuery Now?
   - **Legacy systems**: Many large and small enterprises with older web applications still use jQuery.
   - **Simple websites**: Smaller websites or projects that don't require the complexity of modern frameworks might use jQuery.
   - **Beginners and learners**: Newcomers to web development often start with jQuery due to its ease of use and abundant resources.
   In summary, while jQuery may not be the cutting-edge tool it once was, it still has a place in the web development ecosystem, particularly for legacy projects, smaller applications, and educational purposes.

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
