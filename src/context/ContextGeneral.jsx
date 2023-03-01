import {createContext, useState, useEffect} from 'react'
import { getDocumentosBD } from '../firebase/api';

export const ContextGeneral= createContext();

export function ContextGeneralProvider(props) {
    const initialStateContent={
        titulo: "",
        desc: "",
        link: "",
        img: " ",
        backColorDesc: "",
        categoria: "",
    }

    const [contentDescPizarron, setContentDescPizarron] = useState(initialStateContent);
    /* const [backColorDesc, setBackColorDesc] = useState(items[0].) */
    const [convocatorias, setConvocatorias] = useState([]);
    const [talleres, setTalleres] = useState([]);
    const [podcast, setPodcast] = useState([]);

    const items = [
        {
          nombre: "convocatorias",
          background: "rgba(255, 255, 255, 0.541)",
          width: "365px",
        },
        {
          nombre: "talleres",
          background: "rgba(71, 31, 115, 0.541)",
          width: "215px",
        },
        {
          nombre: "podcast",
          background: "rgba(146, 40, 110, 0.541)",
          width: "225px",
        },
      ];

    const getLinks = async () => {
        items.map(async (item) => {
        const querySnapshot = await getDocumentosBD(item.nombre);
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        if (item.nombre === "convocatorias") {
            setConvocatorias(docs);
        }
        if (item.nombre === "talleres") {
            setTalleres(docs);
        }
        if (item.nombre === "podcast") {
            setPodcast(docs);
        }
        });
    };

    useEffect(() => {
        getLinks();
        return () => {};
    }, []);

    //Esta función sirve para pintar todo lo que irá adentro del pizarron
    function functionSetContent(variable, color) {
        setContentDescPizarron({
        titulo: variable.titulo,
        desc: variable.desc,
        link: variable.link,
        img: variable.img,
        backColorDesc: color,
        categoria: variable.categoria,
        });
    }

    return (
        <ContextGeneral.Provider value={{
            items: items,
            convocatorias: convocatorias,
            talleres: talleres,
            podcast: podcast,
            contentDescPizarron: contentDescPizarron,
            setContentDescPizarron: setContentDescPizarron,
            functionSetContent: functionSetContent
        }}>
            {props.children}
        </ContextGeneral.Provider>
    )
}