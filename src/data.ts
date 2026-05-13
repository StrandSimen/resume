import {unityLogo, cLogo, javaLogo, awsIcon, postgresIcon, pythonIcon, reactIcon, typeScriptIcon } from './assets/icons';

export const data = {
  name: 'Simen Nilsen Strand',
  website: 'github.com/StrandSimen',
  email: 'simennstrand@gmail.com',
  phone: '+47 943 76 437',
  pitch:
    'Jeg fullfører bacheloren min våren 2026, og har fått litt erfaring fra studier og hobbyprosjekter. Jeg starter internship til sommeren og ser frem til å jobbe mer praktisk i et team med erfarne utviklere. Til høsten ser jeg etter en mulighet der jeg kan bruke kompetansen og interessen min i et hyggelig miljø.',
  education: {
    title: 'Utdanning',
    entries: [
      {
        title: 'Fullstack-utvikling, bachelor',
        institution: 'Høyskolen Kristiania',
        date: 'aug 23 - nåværende',
        location: 'Oslo',
        description: 'Fokus på arbeidsrelevante teknologier og teamarbeid',
      },
      {
        title: 'Informatikk, årsstudium',
        institution: 'Universitetet i Oslo',
        date: 'aug 22 - jun 23',
        location: 'Oslo',
        description: 'Fokus på fundamentale temaer innen datateknologi',
      },
    ],
  },
  workExperience: {
    title: 'Arbeidserfaring',
    entries: [
      {
        title: 'Utvikler, sommerjobb',
        institution: 'KLP',
        date: 'jun 26 - aug 26',
        location: 'Oslo',
        description:
          'Får gleden av å tilbringe sommeren 2026 hos KLP! Utvikling av mikrotjenester i team. Java/Spring, React og TypeScript',
      },
      {
        title: 'Resepsjonsvert, deltid',
        institution: 'SiO Athletica',
        date: 'mai 23 - nåværende',
        location: 'Oslo',
        description: 'Ansvar for kundeservice, åpning/stenging og opplæring av ansatte ved Athletica Blindern.'
      },
      {
        title: 'Nestlagfører',
        institution: 'Forsvaret',
        date: 'jan 21 - jan 22',
        location: 'Bardufoss',
        description: 'Gjennomførte førstegangstjeneste i Sambandandsbataljonen. Ga meg store inngangsverdier på det å være selvstendig, jobbe i lag og gi alt'
      },
      {
        title: 'Hjelpearbeider, deltid',
        institution: 'Hus & Hjem AS',
        date: 'jan 20 - aug 24',
        location: 'Sandefjord',
        description: 'Arbeid med riving, snekring og montering. Rollen krevde selvstendighet og ansvar i praktisk arbeid'
      },
      {
        title: 'Butikkmedarbeider, deltid',
        institution: 'REMA 1000',
        date: 'jan 19 - jun 21',
        location: 'Sandefjord',
        description: 'Har lært meg viktigheten av selvstendighet og å være imøtekommende i møte av kunder'
      }
    ],
  },
  otherExperience: {
    title: 'Annen erfaring',
    entries: [
      {
        title: 'Bacheloroppave i samarbeid med Accenture',
        description:
          'Er i ferd med å fullføre bacheloroppgave i samarbeid med Accenture. Utviklet et "Consultant Mastching System"',
      },
      {
        title: 'Hobbyprosjekter',
        description:
          'Jeg liker å lage små prosjekter til meg og vennene mine. For eksempel har jeg laget en bot som gir oss notifikasjoner hver gang noen fullfører en runde i dataspillet League of Legends, med resultater og statistikk.',
      },
    ],
  },
  skills: {
    title: 'Ferdigheter',
    entries: [
      {
        icon: javaLogo,
        name: 'Java',
      },
      {
        icon: reactIcon,
        name: 'React',
      },
      {
        icon: typeScriptIcon,
        name: 'TypeScript',
      },
      {
        icon: pythonIcon,
        name: "Python"
      },
      {
        icon: cLogo,
        name: 'C#',
      },
      {
        icon: unityLogo,
        name: 'Unity',
      },
      {
        icon: awsIcon,
        name: 'AWS',
      },
      {
        icon: postgresIcon,
        name: 'Postgres',
      },
    ],
  },
};
