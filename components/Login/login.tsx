import { View, Text } from "react-native-web";

interface Token {
  name: string;
  complete: boolean;
}

interface TiempoToken {
  valid: boolean;
  expirationDate: number;
}

interface LoginsProps {
  ususario: string;
  password: string;

  // age?: number;
  tiempoToken: TiempoToken;
  token: Token[];
}

const Login = ({
  ususario = "",
  password = "",
  // age = 0,
  tiempoToken = { valid: false, expirationDate: 2000 },
  token = [],
}: LoginsProps) => {
  // let agePlusOne: number = age + 1;
  // agePlusOne = agePlusOne + 1;
  return (
    <>
      <Text>{ususario}</Text>
      <Text>{password}</Text>
      {/* {age && <Text>{age}</Text>} */}
      {tiempoToken.valid && <Text>{tiempoToken.expirationDate}</Text>}
      {token .map((item, index) => (
        <View key={`person-token -list-${index}`}>
          <Text>{item.name}</Text>
          <Text>{item.complete ? "Srve" : "no Sirve"}</Text>
        </View>
      ))}
    </>
  );
};

export default Login;
