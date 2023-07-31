import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

import './global.css';
import styles from './app.module.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/isacmoreira10.png',
      name: 'Isac Moreira',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz na Rockeseat' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-05-03 10:24:23'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rockeseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz na Rockeseat' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-05-20 10:24:23'),
  },
]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App


