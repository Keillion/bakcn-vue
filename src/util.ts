import Cookies from "js-cookie"
import { message } from "ant-design-vue";

const bakcnUrl = 'http://localhost:18080/'; // todo: use env to get address

const _fetch = async(bNeedLogin: boolean, path: string, init?: RequestInit)=>{
  const tkUsr = Cookies.get("TkUsr");
  if(bNeedLogin && !tkUsr){
    // todo: redirect to login, todo: check expire
  }

  try{
    const rep = await fetch(`${bakcnUrl}${path}`, { ...init, headers: tkUsr ? { Authorization: `Bearer ${tkUsr}`, ...init?.headers } : init?.headers });
    if(!rep.ok){
      throw new Error(await rep.text() || JSON.stringify(rep.status) || "Connection Error.");
    }
    return rep;
  }catch(ex:any){
    message.error('Network Error: '+(ex.message||ex.name));
    throw ex;
  }
};

export async function fetchLogin({type, identifier, token}: {type:string, identifier:string, token:string}){
  const rep = await _fetch(false, 'login', {
    method: "POST",
    headers: {'Content-Type':"application/json"},
    body: JSON.stringify({type,identifier,token})
  });
  const tkUsr = await rep.text();
  Cookies.set('TkUsr',tkUsr);
}

export async function fetchNotNeedLogin(path: string, init?: RequestInit){
  return await _fetch(false, path, init);
};

export async function fetchMustLogin(path: string, init?: RequestInit){
  return await _fetch(true, path, init);
};
