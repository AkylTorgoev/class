import React from "react";
import { Route, Routes } from "react-router-dom";
import AddContact from "../Components/AddContact/AddContact";
import EditContacts from "../Components/EditContacts/EditContacts";
import ContactList from "../Components/ContactList/ContactList";
import Home from "../Components/Home/Home";
import Counter from "../Components/Counter/Counter";
import Receipts from "../Components/Receipts/Receipts";


const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/list" element={<ContactList />} />
        <Route path="/edit" element={<EditContacts />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
