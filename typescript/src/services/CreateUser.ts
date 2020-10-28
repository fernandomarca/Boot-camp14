/**
 * para criar: name, email, password
 */
interface techObject {
  title: string;
  experience: number;
}


interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | techObject>;
}
//Podia ser data:CreateUserData
function createUser({ name, email, password, techs }: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs
  }
  return user;
}

export default createUser;