import React from "react"
// Components
import Container from "../components/layout/Container"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navigation/Navbar"
// import StickerList from "./components/stickers/StickerList"
import CardList from "../components/cards/CardList"

const stickersData = [
  {
    id: 1,
    title: "Visualiser",
    text: "Se projeter dans une situation positive",
    color: "text-main"
  },
  {
    id: 2,
    title: "Méditer",
    text: "Prendre du recul, faire le vide en soi pour ce ressourcer",
    color: "text-light-blue"
  },
  {
    id: 3,
    title: "Evaluer",
    text: "J'évalue la progression de mes actions",
    color: "text-cyan"
  },
  {
    id: 4,
    title: "Forces",
    text: "J'identifie mes points forts et compétences",
    color: "text-teal"
  },
  {
    id: 5,
    title: "Découvrir",
    text: "Apprendre à me connaître afin de mieux connaître les autres",
    color: "text-green"
  },
  {
    id: 6,
    title: "Progresser",
    text: "Être conscient et fier de ma réussite",
    color: "text-yellow"
  }
]

const mainData = [
  {
    id: 1,
    image: "/assets/img/card-1.jpg",
    text: "Vis au soleil,\nNage dans la mer,\nEnivre-toi d'air pur",
    author: "Ralph Valdo Emerson"
  },
  {
    id: 2,
    image: "/assets/img/card-2.jpg",
    text: "Explore. \nRêve. \nDécouvre",
    author: "Mark Twain"
  },
  {
    id: 3,
    image: "/assets/img/card-3.jpg",
    text: "Ce n'est que lorsque \nle ciel est noir\n que nous pouvons voir \nles étoiles.",
    author: "Martin Luther Kinng JR."
  },
  {
    id: 4,
    image: "/assets/img/card-4.jpg",
    text: "Quand tu\n perds, ne \nperds pas \nla leçon",
    author: "Dalai Lama"
  },
  {
    id: 5,
    image: "/assets/img/card-5.jpg",
    text: "A toi de décider ce que tu vénère",
    author: "David Foster Wallace"
  },
  {
    id: 6,
    image: "/assets/img/card-6.jpg",
    text: "Il n'est jamais trop tard pour devenir ce que nous aurions pu être",
    author: "George Eliot"
  },
  {
    id: 7,
    image: "/assets/img/card-7.jpg",
    text: "Le Soleil brille pas Sur nous mais EN nous",
    author: "John Muir"
  },
  {
    id: 8,
    image: "/assets/img/card-8.jpg",
    text: "Un coeur éveiller est comme un ciel qui déverse de la lumière",
    author: "Hafez"
  },
  {
    id: 9,
    image: "/assets/img/card-9.jpg",
    text: "On ne vois bien qu'avec le coeur. L'essentiel est invisible pour les yeux",
    author: "Antoine de Saint Exupéry"
  },
  {
    id: 10,
    image: "/assets/img/card-10.jpg",
    text: "Personne n'est jamais devenu pauvre en donnant",
    author: "Anne Frank"
  },
  {
    id: 11,
    image: "/assets/img/card-11.jpg",
    text: "vis ta vie, \n Vis Ta Vie, \n VIS TA VIE",
    author: "Maurice Sendak"
  },
  {
    id: 12,
    image: "/assets/img/card-12.jpg",
    text: "Vivre est la chose la plus rare. La plupart des gens se contente d'exister",
    author: "Oscar Wilde"
  },
  {
    id: 13,
    image: "/assets/img/card-13.jpg",
    text: "La seule personne que tu es destinée à devenir est la personne que tu décides d'être",
    author: "Ralph Waldo Emerson"
  },
  {
    id: 14,
    image: "/assets/img/card-14.jpg",
    text: "Le seul voyage est interieur",
    author: "Rainer Maria Rilke"
  },
  {
    id: 15,
    image: "/assets/img/card-15.jpg",
    text: "Que tes choix reflète tes espoirs et non tes peurs",
    author: "Nelson Mandela"
  },
  {
    id: 16,
    image: "/assets/img/card-16.jpg",
    text: "Au premier regard cela peut paraître trop difficile. REGARDE ENCORE. Il faut toujours regarder encore",
    author: "Mary Anne Radmacher"
  },
  {
    id: 17,
    image: "/assets/img/card-17.jpg",
    text: "J'aurai pu avoir une autre vie mais c'est celle-ci qui est la mienne",
    author: "Kazuo Ishiguro"
  },
  {
    id: 18,
    image: "/assets/img/card-18.jpg",
    text: "Sois patient et fort. Un jour cette souffrance sera utile",
    author: "Ovide"
  }
]

function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero stickersData={stickersData} />
        <CardList data={mainData} />
      </Container>
    </div>
  )
}

export default Home
