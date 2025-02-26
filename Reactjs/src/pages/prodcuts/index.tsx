import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { Product } from "../../interfaces/produtcts";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <Container>
      <h1>Products</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Products;
