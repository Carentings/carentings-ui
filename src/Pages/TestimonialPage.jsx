import React from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const testimonialsData = [
  {
    id: 1,
    name: 'Griselda',
    avatarSrc: 'path/to/avatar1.jpg',
    feedback:
      "Recommend! Perfect for activities for hosting party kids/adults and great price"
    }
      ,
  {
    id: 2,
    name: 'Jane Smith',
    avatarSrc: 'path/to/avatar2.jpg',
    feedback:
      'I am thoroughly impressed with the exceptional customer service and top-notch game quality provided by this platform.Their dedication to customer satisfaction truly sets them apart. Kudos to the team for their outstanding efforts in making game rental such a joy.'
    },
  // Add more testimonials as needed
];

const TestimonialContainer = styled(Container)({
  marginTop: '60px',
});

const TestimonialCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: 300,
  margin: '0 auto',
  padding: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(1),
}));

const TestimonialPage = () => {
  return (
    <TestimonialContainer maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        User Testimonials
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Check out what our users have to say about our services:
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
          marginTop: '30px',
          marginBottom:'30px'
        }}
      >
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <Avatar
              src={testimonial.avatarSrc}
              alt={testimonial.name}
              sx={{ width: 80, height: 80, marginBottom: 2 }}
            />
            <Typography variant="h6" gutterBottom>
              {testimonial.name}
            </Typography>
            <Typography variant="body1">{testimonial.feedback}</Typography>
          </TestimonialCard>
        ))}
      </Box>
    </TestimonialContainer>
  );
};

export default TestimonialPage;
