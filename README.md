# Springboot와 React로 구현하고 AWS로 배포한 Todo Application😁

백엔드와 프론트엔드를 분리하고 싶어서 개발한 Todo Application 입니다.

제작한 Application 을 AWS 에 배포했습니다. 배포 시 AWS 클라우드포메이션 기반인 엘라스틱 빈스톡을 활용해 개발/프로덕션 환경별 설정을 분리하여 IaC를 구축하였습니다.
또한**RDS, 로드 밸런서, 오토 스케일링 그룹** 등 운영 및 스케일링에 필요한 서비스를 사용했습니다.

인증과 인가는 **JWT와 스프링 시큐리티**를 활용해 구현하였습니다.

어플리케이션 접속 시 login 화면으로 리다이렉트 됩니다.
회원가입 후 로그인을 하면 **Todo 리스트**를 작성할 수 있습니다. Todo 리스트는 기본적인 CRUD 가 가능합니다.

<h2 id="table-of-contents">🔎 목차</h2>

---

<details open="open">
  <summary> 목차</summary>
  <ol>
    <li><a href="#skill"> 🔧 기술 스택</a></li>
    <li><a href="#view"> 👀 뷰 페이지</a></li>
  </ol>
</details>

<h2 id="skill">🔧 기술 스택</h2>

---

- Front-end: React.js(Material-Ui)

- Back-end: Spring boot, JPA

- DB: MySql, H2

- Server: AWS, Elastic Beanstalk

<h2 id="view">👀 뷰 페이지</h2>

---

### 로그인 & 회원가입 페이지

어플리케이션 접속 시 login 화면으로 리다이렉트 됩니다.
![''](/image/login.png)

회원가입 페이지 입니다.

![''](/image/signup.png)

### TODO 리스트 페이지

회원가입 후 로그인을 하면 **Todo 리스트**를 작성할 수 있습니다.  
Todo 리스트는 기본적인 CRUD 가 가능합니다.

![''](/image/main.png)

![''](/image/add.png)
