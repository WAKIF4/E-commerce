import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
    return (
        <div>
            <div className="nn">

            <img src="https://document-export.canva.com/cfl2U/DAFdYgcfl2U/11/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230315%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230315T204450Z&X-Amz-Expires=85979&X-Amz-Signature=d94883a4c4b1d325f27ebc0484c26773d3093d83f4411cd63c63fdbc50e43995&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2016%20Mar%202023%2020%3A37%3A49%20GMT" className="home-banner"/>
            </div>
            
            <div className="featured-products-container container mt-4">
                <h2>Derniers Produits</h2>
                {/* last products here */}
                <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>
                <div>
                    <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
                        Voir Plus {">>"}
                    </Link>
                </div>
            </div>
            {/* sale banner */}
            <div className="sale__banner--container mt-4">
                
                <img src="https://img.freepik.com/psd-gratuit/modele-publication-reseaux-sociaux-maquillage_23-2148662936.jpg?w=900&t=st=1678994034~exp=1678994634~hmac=38b6e16708863c64da1385a1b7e49ebd5e65b51ab488fe0286e763e41dd4d47a" />
            </div>
            <div className="recent-products-container container mt-4">
                <h2>Categories</h2>
                <Row>
                    
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
            <div className="sale__banner--container mt-4">
                
                <img src="https://as1.ftcdn.net/v2/jpg/03/72/21/28/1000_F_372212853_Z7ca2f4acqRnHaKKwo8Z45aiqIvMRqqr.jpg" />
            </div>
           
        </div>
    );
}

export default Home;
