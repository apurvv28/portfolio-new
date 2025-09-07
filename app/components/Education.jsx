'use client';

import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const education = [
	{
		degree: 'B.Tech in Computer Science & Engineering (Artificial Intelligence)',
		institution: 'Vishwakarma Institute of Technology, Pune',
		duration: '2025 - 2028',
		description: 'SY SEDA Student',
	},
	{
		degree: 'Diploma in Computer Engineering',
		institution: 'Government Polytechnic, Pune',
		duration: '2022 - 2025',
		description: 'Percentage: 93.27%.',
	},
	{
		degree: 'SSC (10th)',
		institution: `St. Mary's English School, Pusad`,
		duration: '2021 - 2022',
		description: 'Percentage: 96.60%.',
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.2 + i * 0.2, duration: 0.8, ease: 'easeOut' },
	}),
};

const Education = () => {
	return (
		<Box
			id="education"
			sx={{
				py: 8,
				background: '#181A20',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 1, ease: 'easeOut' }}
				>
					<Typography
						variant="h3"
						component="h2"
						gutterBottom
						textAlign="center"
						sx={{
							fontWeight: 700,
							letterSpacing: 1,
							fontSize: {
								xs: '2rem',
								sm: '2.5rem',
								md: '3rem',
								lg: '3.5rem',
							},
							color: '#fff',
							mb: 8,
						}}
					>
						My Education
					</Typography>
				</motion.div>
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						gap: 4,
						justifyContent: 'center',
						alignItems: 'stretch',
						width: '100%',
					}}
				>
					{education.map((edu, index) => (
						<Box
							key={index}
							component={motion.div}
							custom={index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							variants={cardVariants}
							sx={{
								flex: 1,
								minWidth: { xs: 260, sm: 300, md: 320 },
								maxWidth: 350,
								display: 'flex',
								alignItems: 'stretch',
							}}
						>
							<Card
								sx={{
									background: '#23242b', // Dark card background
									color: '#fff', // White text
									borderRadius: '24px',
									boxShadow: '0 4px 24px rgba(255,106,0,0.10)', // Subtle orange glow
									px: 3,
									py: 2,
									minHeight: 220,
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									transition: 'transform 0.3s, box-shadow 0.3s',
									'&:hover': {
										transform: 'scale(1.04)',
										boxShadow: '0 8px 32px rgba(255,106,0,0.18)',
									},
								}}
								elevation={0}
							>
								<CardContent>
									<Typography
										variant="h5"
										component="h3"
										gutterBottom
										sx={{
											fontWeight: 700,
											fontSize: {
												xs: '1.2rem',
												sm: '1.4rem',
												md: '1.6rem',
											},
											mb: 1,
											color: '#fff', // White for heading
										}}
									>
										{edu.degree}
									</Typography>
									<Typography
										variant="subtitle1"
										sx={{
											fontWeight: 500,
											fontSize: {
												xs: '1rem',
												sm: '1.1rem',
												md: '1.15rem',
											},
											mb: 1,
											color: '#ff6a00', // Accent color for institution
										}}
									>
										{edu.institution}
									</Typography>
									<Typography
										variant="subtitle2"
										sx={{
											fontWeight: 500,
											fontSize: {
												xs: '0.98rem',
												sm: '1.05rem',
												md: '1.12rem',
											},
											mb: 1,
											color: '#e0e0e0', // Light gray for duration
										}}
									>
										{edu.duration}
									</Typography>
									<Typography
										variant="body2"
										sx={{
											fontSize: {
												xs: '0.95rem',
												sm: '1.02rem',
												md: '1.08rem',
											},
											lineHeight: 1.5,
											color: '#bdbdbd', // Softer gray for description
										}}
									>
										{edu.description}
									</Typography>
								</CardContent>
							</Card>
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default Education;