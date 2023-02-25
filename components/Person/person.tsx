import { View, Text } from "react-native-web";

interface Education {
  name: string;
  complete: boolean;
}

interface DriverLisense {
  valid: boolean;
  expirationDate: number;
}

interface PersonaProps {
  name: string;
  age?: number;
  driverLisense: DriverLisense;
  education: Education[];
}

const Person = ({
  name = "",
  age = 0,
  driverLisense = { valid: false, expirationDate: 2000 },
  education = [],
}: PersonaProps) => {
  let agePlusOne: number = age + 1;
  agePlusOne = agePlusOne + 1;
  return (
    <>
      <Text>{name}</Text>
      {age && <Text>{age}</Text>}
      {driverLisense.valid && <Text>{driverLisense.expirationDate}</Text>}
      {education.map((item, index) => (
        <View key={`person-education-list-${index}`}>
          <Text>{item.name}</Text>
          <Text>{item.complete ? "Completado" : "En curso"}</Text>
        </View>
      ))}
    </>
  );
};

export default Person;
