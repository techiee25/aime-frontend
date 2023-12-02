import { React, useCallback, useState, useEffect } from "react";

import { AppContext } from "./Context.js";

// import { dark, light) from './Theme.js';

function AIMEAppProvider(props) {
  const { children } = props;

  const [themeName, setThemeName] = useState("light");
  const [isLogged, setIsLogged] = useState(true);

  // const [theme, set Theme] useState(light);

  // const [selected, setSelected] useState('light');

  // useEffect((){

  // set Theme(selected == 'light? light: dark);

  //), [selected])

  const setNewTheme = useCallback(
    (name) => {
      setThemeName(name);
    },
    [setThemeName]
  );

  return (
    <AppContext.Provider
      value={{ themeName, setNewTheme, isLogged, setIsLogged }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AIMEAppProvider;
