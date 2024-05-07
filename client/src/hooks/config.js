import {jwtDecode} from "jwt-decode";

function config(){
    const items = JSON.parse(localStorage.getItem('user'));
    return items;

}

export default config