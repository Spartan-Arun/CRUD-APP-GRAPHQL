import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { Bookings } from './bookings';
import Hotels from './hotels'

export default function Home() {
  const [key,setKey] = useState('hotels');

  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Container className="m-4">
          <Tabs activeKey={key} defaultActiveKey="hotels"   onSelect={(k) => setKey(k)} className="mb-3">
              <Tab eventKey="hotels" title="Hotels">
                  <Hotels/>
              </Tab>
              <Tab eventKey="bokings" title="Bookings">
                <Bookings/>
              </Tab>
          </Tabs>
    </Container>
    </ApolloProvider>
  )
}
