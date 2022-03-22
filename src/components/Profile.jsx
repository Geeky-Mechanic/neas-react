/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function Profile(){
    return (
        <div className="profile">
            <h1 className="name">Je suis <br />neas.</h1>
            <img className="profile-img" src="./images/neas-pic.png" alt="Soundcloud-profile-picture" />
            <h3 class="bio-text">
        Qui est neas ? <br />
neas c’est le gars qui écrit ce texte, mais comme il est un peu trop cool (Il a une PS5 quand même) il l’écrit à la troisième personne. C’est un Français qui vit au Québec, parce que why not? Il stream sur Twitch, il fait de la musique, il fait des études de cinéma car c’est sa passion, il game beaucoup, écoute/regarde beaucoup de film, et lit des comics quand ça lui tente (parce qu’il a 2 ans d’âge mental il lui faut des images), il aime le soccer/foot (LOSC, CHELSEA ET CF MONTREAL ALL THE WAY) et le Hockey des canadiens (ouais depuis qu’ils sont allait en finale de la coupe Stanley il a pensé que c’était cool d’être supporter du CH, grosse erreur). Je pense que ça le décrit bien.
      </h3>
        </div>
    );
}

export default Profile;