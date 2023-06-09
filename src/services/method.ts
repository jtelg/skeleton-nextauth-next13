import ProcessENV from "@/lib/process";

export default class MethodService {
  apiServer = "";
  constructor() {
    this.apiServer = ProcessENV("NEXTAUTH_URL");
  }

  getData(path: string) {
    const url = `${this.apiServer}/api${path}`;
    return fetch(url, { cache: "no-store" }).then((res) => res.json());
  }

  async postData(path: string, body: any) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const url = `${this.apiServer}/api${path}`;
    const re = await fetch(url, options);
    if (re.ok) {
      const data = await re.json();
      if (data.length === 0) return false;
      return data;
    }
    return false;
  }

  async putData(path: string, body: any) {
    const options = {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `${this.apiServer}/api${path}`;
    const updres = await fetch(url, options);
    if (updres.ok) {
      return true;
    }
    return false;
  }

  async deleteData(id: string, path: string) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    };
    const url = `${this.apiServer}/api${path}`;
    const re = await fetch(url, options);
    if (re.ok) return true;
    return false;
  }
}
