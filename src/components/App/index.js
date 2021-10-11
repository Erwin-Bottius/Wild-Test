// == Import
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from 'src/components/header';
import Main from 'src/components/main';
import Footer from 'src/components/footer';
import './styles.scss';

// == Composant
const App = () => {
  // state qui contiendra un tableau avec les members
  const [membersArray, setMembersArray] = useState([]);
  // state sur la valeur de l'input
  const [inputValue, setInputValue] = useState('');

  // Ici on utilise useEffect pour faire requeter l'API et changer le state membersArray
  // avec la réponse de l'api => au premier rendu du composant App
  useEffect(() => {
    axios.get('http://localhost:3000/members')
      .then((members) => {
        setMembersArray(members.data);
      });
  }, []);
  // Fonction sur le onChange de l'input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  // Fonction au submit du formulaire
  const handleSumbitForm = (event) => {
    event.preventDefault();
    // Requete post à l'API qui ajouter le member en BDD
    axios({
      method: 'post',
      url: 'http://localhost:3000/member',
      data: {
        newMember: inputValue,
      },
    })
    // Puis on fait une nouvelle requete get pour mettre a jour membersArray
      .then(() => {
        axios.get('http://localhost:3000/members')
          .then((members) => {
            setMembersArray(members.data);
            setInputValue('');
          });
      });
  };
  return (
    <div className="app">
      <Header />
      <Main
        members={membersArray}
        onChangeInput={handleInputChange}
        onSubmitForm={handleSumbitForm}
        inputValue={inputValue}
      />
      <Footer />
    </div>
  );
};

// == Export
export default App;
