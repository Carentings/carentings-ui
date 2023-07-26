import React from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    avatarSrc: 'path/to/avatar1.jpg',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus ac libero sagittis venenatis. Nullam a leo varius, euismod justo non, gravida orci.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatarSrc: 'path/to/avatar2.jpg',
    feedback:
      'Vivamus vel ante eget nisi aliquet fermentum. Nulla facilisi. Maecenas rhoncus, nisl vitae feugiat scelerisque, neque tortor viverra elit, in scelerisque odio sem in libero.',
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
