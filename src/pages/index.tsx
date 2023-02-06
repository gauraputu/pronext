import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { blue, red } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ProNext - Zoho Project Next Generation</title>
        <meta
          name="description"
          content="ProNext - Zoho Project Next Generation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid2 container spacing={2}>
        <Grid2 xs={8}></Grid2>
        <Grid2 xs={4}><Avatar sx={{ bgcolor: blue[500], width: 56, height: 56 }}>GP</Avatar></Grid2>
        <Grid2 xs={12}><Box bgcolor="blue" height="50vh"></Box></Grid2>
      </Grid2>
    </>
  );
}
