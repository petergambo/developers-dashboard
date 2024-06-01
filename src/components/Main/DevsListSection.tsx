import { useEffect, useState } from "react";
import { Dev } from "../../models/DevModel";
import { DevDataService } from "../../services/DevDataService";
import './hide-scroll.css'
import DevelopersCard from "./DevelopersCard";


const devDataService = new DevDataService();

const DevsListSection: React.FC = () => {
  const [persons, setPersons] = useState<Dev[]>([]);
  const [reload, setReload] = useState<boolean>(false)

  useEffect(() => {
    // Adding some sample data
    devDataService.add({
      id: 1,
      firstName: 'Peter',
      lastName: 'Gambo',
      otherNames: 'Aren',
      imageSource: 'profile-1.svg',
      specialty: 'Software Engineer',
      address: '74, Jos Plateau state',
      hourlyRate: 320000,
      rateCurrency: "NGN",
      currencySign:"N"
    });

    devDataService.add({
      id: 1,
      firstName: 'Twinkle',
      lastName: 'Star',
      otherNames: 'Galaxy',
      imageSource: 'profile-1.svg',
      specialty: 'Graphics Designer',
      address: 'Ohio USA',
      hourlyRate: 90800,
      rateCurrency: "USD",
      currencySign: "$"
    });

    devDataService.add({
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      otherNames: '',
      imageSource: 'profile-2.svg',
      specialty: 'Data Scientist',
      address: '456 Elm St, Anytown, USA',
      hourlyRate: 100000,
      rateCurrency: "NGN",
      currencySign: "N"
    });

    setPersons(devDataService.getAll());
    setReload(false)
  }, [reload]);

//   const reloadComponent = ()=>{
//     setReload(true)
//   }

  return (
    <div>
      {persons.map((person, index) => (
        <DevelopersCard key={person.id} person={person} isFirst={index === 0} />
      ))}
    </div>
  );
};


export default DevsListSection