import * as React from "react";
import { validarCredenciales, Layout, Seo } from "../components";

export default class Validador extends React.Component {
  render() {
    validarCredenciales();
    return (
      <Layout>
        <Seo title="Validador" />

        <h1>Validador</h1>
      </Layout>
    );
  }
}
