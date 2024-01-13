"use client"
import { Box } from "@chakra-ui/react";
import React from 'react';
import FacebookPost from '../components/FacebookPost'


export default function HomePage() {

    return (
        <Box background={'#F0F2F5'} minH='100vh' marginTop={'66px'} >
            {/* Facebook Post */}
            <FacebookPost />
        </Box >
    )
}