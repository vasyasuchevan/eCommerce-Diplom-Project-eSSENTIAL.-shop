import { Email, Facebook, Instagram, LinkedIn, Phone, Room, Twitter } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
  flex: 1;  
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0px; 
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`


const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 40%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ESSENTIAL.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime officiis error eligendi doloribus dicta ducimus eos a itaque veritatis enim voluptates sint quia ipsam accusamus, id dolor aliquid et natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni, officia dolore cumque quo magnam inventore labore quae officiis eum ullam blanditiis, explicabo iure earum! Tenetur doloremque sapiente at amet!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook/>
          </SocialIcon >
          <SocialIcon color = "8a3ab9">
            <Instagram/>
          </SocialIcon>
          <SocialIcon color = "1DA1F2">
            <Twitter/>
          </SocialIcon>
          <SocialIcon color = "0072b1">
            <LinkedIn/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man fashion</ListItem>
          <ListItem>Woman fashion</ListItem>
          <ListItem>Accesoires</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Home</ListItem>

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> <Room style={{marginRight: "10px"}} />
          Shop "NON STOP", Petrychanka, Chernivtsi region, 60400
        </ContactItem>
        <ContactItem> <Phone style={{marginRight: "10px"}}/>
          +380 99 520 68 25
        </ContactItem>
        <ContactItem> <Email style={{marginRight: "10px"}}/>
          contact@rndmcrw.dev
        </ContactItem>
        <Payment src="https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Powered-by-Stripe-Logo.wine.svg"/>
      </Right>
    </Container>
  )
}

export default Footer