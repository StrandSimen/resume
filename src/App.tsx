import styled from "styled-components"
import Header from "./components/Header"
import Skills from "./components/Skills"
import Section from "./components/Section"
import { data } from "./data"
import Experiences from "./components/Experiences"

export default function App() {
  const { education, workExperience, otherExperience, skills, pitch } = data

  return (
    <Container>
      <Header />
      <Pitch>{pitch}</Pitch>
      <Body>
        <MainColumn>
          {[workExperience, education].map((experiences, sectionIndex) => (
              <Section key={`section-${sectionIndex}`} title={experiences.title}>
                <Experiences experiences={experiences} />
              </Section>
            )
          )}
        </MainColumn>
        <SideColumn>
          <Section title={skills.title}>
            <SectionEntryDescription>
              <Skills />
            </SectionEntryDescription>
          </Section>
          <Section title={otherExperience.title}>
            <SectionEntries>
              {otherExperience.entries.map((entry, entryIndex) => {
                const { title, description } = entry

                return (
                  <SectionEntry key={`other-experience-${title}-${entryIndex}`}>
                    <SectionEntryTitle>{title}</SectionEntryTitle>
                    <SectionEntryDescription>{description}</SectionEntryDescription>
                  </SectionEntry>
                )
              })}
            </SectionEntries>
          </Section>
        </SideColumn>
      </Body>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6mm;

  width: 210mm;
  height: 297mm;
  padding: 12mm;
  background: #f7f7f7;
  box-shadow: 4px 4px 8px -3px #00000055;
`

const Pitch = styled.p`
  font-family: Work Sans;
  font-weight: 300;
  font-size: 15px;
`

const Body = styled.div`
  display: flex;
  gap: 8mm;
`

const MainColumn = styled.main`
  display: flex;
  flex-direction: column;
  gap: 6mm;

  flex: 3;
`

const SideColumn = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 6mm;

  flex: 2;
`

const SectionEntries = styled.div`
  display: flex;
  flex-direction: column;
`

const SectionEntry = styled.article`
  &:not(:last-child) {
    padding-bottom: 2mm;
    border-bottom: 1px dashed #dedede;
  }

  &:not(:first-child) {
    padding-top: 2mm;
  }
`

const SectionEntryTitle = styled.h3`
  font-family: Work Sans;
  font-weight: 450;
  font-size: 16px;
  margin-bottom: 1mm;
`

const SectionEntryDescription = styled.div`
  font-family: Work Sans;
  font-weight: 300;
  font-size: 15px;
`
