import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Row, Col, Form, Breadcrumb, Button, Card } from "react-bootstrap";
import AdminLayout from "../../common/admin/AdminLayout";
import "./style.css";

const EditContact = () => {
  const { id } = useParams();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  const updateContact = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/api/contact/${id}`, {
      nama: nama,
      email: email,
      message: message,
    });
    navigate.push("/contact");
  };

  useEffect(() => {
    getContactById();
  }, []);

  const getContactById = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/contact/${id}`
    );
    setNama(response.data.nama);
    setEmail(response.data.email);
    setMessage(response.data.message);
  };

  return (
    <AdminLayout>
      <div>
        <Breadcrumb className="mt-3">
          <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/contact">Message</Breadcrumb.Item>
          <Breadcrumb.Item active>Edit Message</Breadcrumb.Item>
        </Breadcrumb>

        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-5">
              <h5 className="font-weight-bold" style={{ fontSize: "20px" }}>
                Form Edit Message
              </h5>
            </div>
            <Form onSubmit={updateContact}>
            <Row className="mb-3">
                <Col md="2" className="d-flex justify-content-end">
                  <Form.Label>Nama</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    type="text"
                    name="nama"
                    value={nama}
                    placeholder="Nama"
                    onChange={(e) => setNama(e.target.value)}
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md="2" className="d-flex justify-content-end">
                  <Form.Label>Email</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md="2" className="d-flex justify-content-end">
                  <Form.Label>Message</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    required
                  />
                </Col>
              </Row>
              <Col md="10" className="d-flex justify-content-end">
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Col>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default EditContact;
