import React from "react";
import { Switch, Route } from "react-router-dom";
import AddArticle from "../components/Form/AddArticle";
import AddPost from "../components/Form/AddPost";

import FoundForm from "../components/Form/FoundForm";
import LostForm from "../components/Form/LostForm";
import FoundPets from "../components/FoundLost/FoundPets";
import LostPets from "../components/FoundLost/LostPets";
import PetFound from "../components/FoundLost/PetFound";
import PetLost from "../components/FoundLost/PetLost";
import Home from "../components/Home/Home";
import Post from "../components/Home/Post";
import Main from "../components/Main/Main";
import EditProfile from "../components/Profile/EditProfile";
import Article from "../components/Servic/Article";
import Service from "../components/Servic/Service";
import SignUpIn from "../components/SignUpIn/SignUpIn";
import { serviceId } from "../store/typeList";

const Pages = () => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Main />
      </Route>
      <Route exact={true} path="/found">
        <FoundPets />
      </Route>
      <Route exact={true} path="/lost">
        <LostPets />
      </Route>
      <Route exact={true} path="/Post">
        <Home />
      </Route>
      <Route exact={true} path="/sign_in">
        <SignUpIn />
      </Route>
      <Route exact={true} path="/lost/form/lost">
        <LostForm />
      </Route>
      <Route exact={true} path="/found/form/found">
        <FoundForm />
      </Route>
      <Route exact={true} path="/edit_profile/:id">
        <EditProfile />
      </Route>
      <Route exact={true} path="/found/:id">
        <PetFound />
      </Route>
      <Route exact={true} path="/lost/:id">
        <PetLost />
      </Route>
      <Route exact={true} path="/Post/post/:id">
        <Post />
      </Route>
      <Route exact={true} path="/Post/add_post/">
        <AddPost />
      </Route>
      <Route exact={true} path={`/${serviceId[0]}`}>
        <Service />
      </Route>
      <Route exact={true} path={`/${serviceId[1]}`}>
        <Service />
      </Route>
      <Route exact={true} path={`/${serviceId[2]}`}>
        <Service />
      </Route>
      <Route exact={true} path={`/${serviceId[3]}`}>
        <Service />
      </Route>
      <Route exact={true} path={`/${serviceId[0]}/post/:id`}>
        <Article />
      </Route>
      <Route exact={true} path={`/${serviceId[1]}/post/:id`}>
        <Article />
      </Route>
      <Route exact={true} path={`/${serviceId[2]}/post/:id`}>
        <Article />
      </Route>
      <Route exact={true} path={`/${serviceId[3]}/post/:id`}>
        <Article />
      </Route>
      <Route exact={true} path={`/${serviceId[0]}/add_post`}>
        <AddArticle />
      </Route>
      <Route exact={true} path={`/${serviceId[1]}/add_post`}>
        <AddArticle />
      </Route>
      <Route exact={true} path={`/${serviceId[2]}/add_post`}>
        <AddArticle />
      </Route>
      <Route exact={true} path={`/${serviceId[3]}/add_post`}>
        <AddArticle />
      </Route>
    </Switch>
  );
};
export default Pages;
