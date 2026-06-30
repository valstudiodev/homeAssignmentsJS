
interface Fact {
  fact: string;
  length: number;
}

class App {
  apiService: ApiService;
  renderService: RenderService;

  constructor(apiService: ApiService, renderService: RenderService) {
    this.apiService = apiService
    this.renderService = renderService
  }

  async start() {
    try {
      const data = await this.apiService.getFacts()
      this.renderService.render(data)
    } catch (error) {
      this.renderService.showError(
        error instanceof Error ? error.message : 'Unknown error'
      )
    }
  }
}

class ApiService {
  private readonly url: string;

  constructor(url: string) {
    this.url = url
  }

  async getFacts(): Promise<Fact[]> {
    const response = await fetch(this.url)
    if (!response.ok) throw new Error("Server Error");

    const data = await response.json()

    return data.data
  }
}

class RenderService {
  private readonly container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container
  }

  createMarkup(data: Fact[]): string {

    let markup = ''

    for (const item of data) {
      markup += `<div class='fact-card'>
                    <h3 class='fact-card__title'>🐱 Cat Fact </h3>
                    <p class='fact-card__text'>${item.fact}</p>
                    <span class='fact-card__length'> 📏 Length:${item.length}</span>
                 </div>`
    }

    return `<div class='facts'>
              
              ${markup}
            </div>`
  }

  render(data: Fact[]): void {
    const html = this.createMarkup(data)

    this.container.innerHTML = html
  }

  showError(message: string): void {
    this.container.innerHTML = `<p style='color:red'>${message}</p>`
  }
}

const containerParent = document.querySelector(`.container`) as HTMLDivElement
if (!containerParent) throw new Error("Container not found")

const apiService = new ApiService('https://catfact.ninja/facts?limit=10')
const renderService = new RenderService(containerParent)

const app = new App(apiService, renderService)

app.start()



const item = {
  fact: "Cats sleep 70% of their lives.",
  length: 33
}










// =====================================================================
// =========================== async-await =============================
// =====================================================================
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string
  }
}

async function getUserApi(): Promise<void> {

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    console.log(typeof response);

    if (!response.ok) throw new Error("Server Error");

    const user: User = await response.json()
    console.log(typeof user);

    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log(user.id);
    console.log(user.company.name);

  } catch (error) {
    console.error(error);
  }
}
// getUserApi()

// ========================================
async function getAllUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!response.ok) throw new Error("Server Error");

    const users: User[] = await response.json()

    // for (const user of users) {
    //   console.log(user.name);
    // }

    const names = users.map(user => user.name)
    console.log(names);

  } catch (error) {
    console.error(error);
  }
}
// getAllUsers()


// ========================================
interface Post {
  id: number;
  title: string;
  body: string;
}

async function getUserPost(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    if (!response.ok) throw new Error("Server Error");

    const user = await response.json()

    const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    if (!responsePost.ok) throw new Error("Server Error");

    const userPosts: Post[] = await responsePost.json()

    const titles: string[] = userPosts.map(post => post.title)

    for (const post of titles) {
      console.log(` ${user.name} - ${post}`);
    }

  } catch (error) {
    console.error(error);
  }
}
// getUserPost()

// ========================================
async function getUserAllPosts(): Promise<void> {
  try {
    const userPromise = fetch('https://jsonplaceholder.typicode.com/users/1')
    const postPromise = fetch('https://jsonplaceholder.typicode.com/posts?userId=1')

    const [userResponse, postResponse] = await Promise.all([userPromise, postPromise])

    if (!userResponse.ok) throw new Error("User Error");

    if (!postResponse.ok) throw new Error("Posts Error");

    const [user, post] = await Promise.all([userResponse.json(), postResponse.json()])

    console.log(user.name);

    for (const postItem of post) {
      console.log(postItem.title);
    }

  } catch (error) {
    console.error(error);
  }
}
// getUserAllPosts()






// ========================================
async function getMessage(): Promise<string> {
  return 'Hello Val'
}
// console.log(getMessage());

function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded')
    }, 2000);
  })
}

// async function getData(): Promise<void> {
//   const data = fetchData()
//   console.log(data);
// }

async function getData(): Promise<void> {
  const data = await fetchData()
  console.log(data);
}
// getData()

// ========================================
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}
async function run(): Promise<void> {
  console.log('Start');

  await delay(1000)
  console.log('1 second')

  await delay(2000)
  console.log('2 seconds')

  await delay(3000)
  console.log('3 seconds');

}
// run()

// ========================================
function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function runWait(): Promise<void> {
  console.log('Start');

  await wait(2000)

  console.log('Finish');
}
// runWait()

// ============ Обробка помилок ============
function getUser(): Promise<string> {
  return new Promise((resolve, reject) => {
    reject(new Error('User not found'))
  })
}
async function loadUser(): Promise<void> {
  try {
    const user = await getUser()
    // console.log(user);

  } catch (error) {
    // console.log(error);
  }
}
// loadUser()

// ===================================================
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const month = 1 + Math.floor(Math.random() * 20)
    if (month <= 12) {
      resolve(month)
      // console.log(month);
    }
    else {
      // reject(new Error('Month is incorrect'))
      // console.log(month);
    }
  }, 3000);
})
  //   .then((generatedMonth) => generatedMonth + 1)
  //   .then((generatedMonth) => {
  //     console.log(`Month = ${generatedMonth}`);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   })
  //   .finally(() => {
  //     console.log('Completed');
  //   })

  // console.log('Next operation');

  .then((generatedMonth) => {
    let result1
    switch (generatedMonth) {
      case 1:
      case 2:
      case 12:
        result1 = 'winter'
        break;
      case 3:
      case 4:
      case 5:
        result1 = 'spring'
        break;
      case 6:
      case 7:
      case 8:
        result1 = 'summer'
        break;
      case 9:
      case 10:
      case 11:
        result1 = 'autamn'
        break;
    }
    return result1
  })
  .then((season) => {
    let result2
    switch (season) {
      case 'winter': result2 = 'winter jacket'
        break;
      case 'spring': result2 = 'jacket'
        break;
      case 'summer': result2 = 'shorts'
        break;
      case 'autamn': result2 = 'coat'
        break;
    }
    return result2
  })
  .then((dress) => {
    // console.log(dress);
  })

// ========================================
const myPromise = new Promise<string>((resolve, reject) => {
  const isSuccess = true

  setTimeout(() => {
    if (isSuccess) {
      resolve('Дані успішно завантажено!')
      // console.log(myPromise);
    }
    else {
      reject(new Error('Помилка мережі'))
      // console.log(myPromise);
    }
  }, 2000);
})

// ========================================




// =====================================================================
// ============================== fetch ================================
// =====================================================================
async function loadUsers(): Promise<void> {

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!response.ok) {
      throw new Error("Server Error");
    }

    const users = await response.json()

    console.log(users);

  } catch (error) {
    console.error(error);
  }

}
// loadUsers()