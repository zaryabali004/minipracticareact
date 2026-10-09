    import React ,{ Component }  from 'react';
    import { Link } from 'react-router-dom';

    export default class MenuRutas extends Component {

        render() {

            return (
                <div>

                    <ul style = {{display : "flex", gap: "20px" ,liststyle:"none"}}>
                            <li>
                              <Link to="/">HomeComponent</Link>
                             </li>
                             <li>
                                <Link to="DoctoresEspecialidad">DoctoresEspecialidad</Link>
                             </li>
                                     
                    </ul>

                </div>
            );

        }

    }
