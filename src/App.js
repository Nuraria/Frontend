import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './page/Home/Home';
import Composition from './page/Composition/Composition';
import FirstAdmin from './page/AdminPage/FirstAdmin/FirstAdmin';
import TwoAdmin from './page/AdminPage/TwoAdmin/TwoAdmin';
import AutoAdmin from './page/AdminPage/AutoAdmin/AutoAdmin';
import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from './store/slices/categorySlice';

function App() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);
  const [collection, setCollection] = useState({});
  const http = 'http://127.0.0.1:8000/';
  //Получение категорий
  const { refetch: refetchCategories } = useQuery({
    queryKey: ['getCategories'],
    queryFn: async () => {
      return await axios.get(`${http}category/`);
    },
    onSuccess: (data) => {
      console.log(123);
      setCategories(data);
      dispatch(setCategory(data));
    },
  });
  //Получение коллекций
  const { refetch: refetchCollections, isLoading: isGetCollectionsLoading } = useQuery({
    queryKey: ['getCollections'],
    queryFn: async () => {
      return await axios.get(`${http}collection/`);
    },
    onSuccess: (data) => {
      setCollections(data);
    },
  });
  //Получить коллецию
  const { refetch: refetchCollection, isLoading: isGetCollectionLoading } = useQuery({
    queryKey: ['getCollection'],
    queryFn: async (collection_id) => {
      return await axios.get(`${http}collection/${collection_id}`);
    },
    onSuccess: (data) => {
      setCollection(data);
    },
    enabled: false,
  });
  //Отправка коллекции
  const { mutate: createCollection, isLoading: isPostCollectionLoading } = useMutation({
    mutationKey: 'createCollection',
    mutationFn: async (body) => {
      return await axios.post(`${http}collection/`, body);
    },
    onSuccess: () => refetchCollections(),
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/composition/:id" element={<Composition />} />
      <Route path="/AdminPage/FirstAdmin/:id" element={<FirstAdmin />} />
      <Route path="/AdminPage/TwoAdmin/:id" element={<TwoAdmin />} />
      <Route path="/AdminPage/AutoAdmin/:id" element={<AutoAdmin />} />
    </Routes>
  );
}

export default App;
