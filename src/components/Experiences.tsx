import styled from "styled-components"
import type { Experience } from "../types"

interface Props {
    experiences: {
        title: string;
        entries: Experience[]
    }
}

export default function Experiences({ experiences }: Props) {
    const { title: sectionTitle, entries } = experiences

    return (
        <Container>
            {entries.map((experience, index) => {
                const { title, date, institution, location, description } = experience

                return (
                    <Experience key={`section-${sectionTitle}-entry-${index}`}>
                        <Header>
                            <Row>
                                <Institution>{institution}</Institution>
                                <Location>{location}</Location>
                            </Row>
                            <Row>
                                <Title>{title}</Title>
                                <Date>{date}</Date>
                            </Row>
                        </Header>
                        <Description>{description}</Description>
                    </Experience>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Experience = styled.article`
  &:not(:last-child) {
    padding-bottom: 2mm;
    border-bottom: 1px dashed #dedede;
  }

  &:not(:first-child) {
    padding-top: 2mm;
  }
`

const Header = styled.header``

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h3`
  font-family: Work Sans;
  font-weight: 450;
  font-size: 15px;
`

const Date = styled.span`
  font-family: Work Sans;
  font-weight: 300;
  font-size: 15px;
  color: #4f4f4f;
`

const Institution = styled.span`
  font-family: Work Sans;
  font-weight: 350;
  font-size: 15px;
  color: #848484;
`

const Location = styled.span`
  font-family: Work Sans;
  font-weight: 300;
  font-size: 15px;
  color: #818181;
`

const Description = styled.p`
  font-family: Work Sans;
  font-weight: 300;
  font-size: 15px;
`