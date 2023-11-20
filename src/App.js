// App
// Components
import Container from './components/layout/Container'
import Hero from './components/hero/Hero'
import Navbar from './components/navigation/Navbar'
import StickerList from './components/stickers/StickerList'
import CardList from './components/cards/CardList'

const stickersData = [
  {
    id: 1,
    title: 'Visualiser',
    text: 'Se projeter dans une situation positive',
    color: 'text-main'
  },
  {
    id: 2,
    title: 'Méditer',
    text: 'Prendre du recul, faire le vide en soi pour ce ressourcer',
    color: 'text-light-blue'
  },
  {
    id: 3,
    title: 'Evaluer',
    text: "J'évalue la progression de mes actions",
    color: 'text-cyan'
  },
  {
    id: 4,
    title: 'Forces',
    text: "J'identifie mes points forts et compétences",
    color: 'text-teal'
  },
  {
    id: 5,
    title: 'Découvrir',
    text: 'Apprendre à me connaître afin de mieux connaître les autres',
    color: 'text-green'
  },
  {
    id: 6,
    title: 'Progresser',
    text: 'Être conscient et fier de ma réussite',
    color: 'text-yellow'
  }
]

const mainData = [
  {
    id: 1,
    image: '/assets/img/card-1.jpg',
    text: "Vis au soleil,\nNage dans la mer,\nEnivre-toi d'air pur",
    author: 'Ralph Valdo Emerson'
  },
  {
    id: 2,
    image: '/assets/img/card-2.jpg',
    text: 'Explore. \nRêve. \nDécouvre',
    author: 'Mark Twain'
  },
  {
    id: 3,
    image: '/assets/img/card-3.jpg',
    text: "Ce n'est que lorsque \nle ciel est noir\n que nous pouvons voir \nles étoiles.",
    author: 'Martin Luther Kinng JR.'
  },
  {
    id: 4,
    image: '/assets/img/card-4.jpg',
    text: 'Quand tu\n perds, ne \nperds pas \nla leçon',
    author: 'Dalai Lama'
  }
]

function App() {
  return (
    <div className="text-accents-9 bg-background">
      <Navbar />
      <Container>
        <Hero stickersData={stickersData} />
        <CardList data={mainData} />
      </Container>
    </div>
  )
}

export default App
