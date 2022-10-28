import * as React from "react";
import { Layout, Seo, validarCredenciales } from "../components";

export default class home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    validarCredenciales();
    return (
      <Layout>
        <Seo title="Home" />
        <h1>Home</h1>
      </Layout>
    );
  }
}
