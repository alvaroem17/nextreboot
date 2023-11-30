'use client'
import { Box, Card, Divider, Typography } from "@mui/material";

export default function Page({ params }) {
  
  return (
    <>
      <main className="container">
        <Card sx={{ marginTop: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <Typography variant="h1" sx={{ color: '#4A0266', fontSize: '2rem', textAlign: 'center' }}>{params.table.slice(0,1).toUpperCase() + params.table.slice(1)}</Typography>
          </Box>
          <Divider sx={{ margin: "1rem" }} />
          
        </Card>
      </main>
    </>
  );
}
