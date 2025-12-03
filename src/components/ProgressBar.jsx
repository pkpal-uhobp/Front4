import { Box, Typography, LinearProgress, Tooltip } from '@mui/material';

/**
 * Universal component for progress visualization
 * Can display overall progress for all technologies
 * or progress for a specific category/technology
 * Supports animation and color/height customization
 */
const ProgressBar = ({
  value,
  label = 'Прогресс',
  showPercentage = true,
  color = 'primary',
  height = 10,
  animated = true,
  stats = null
}) => {
  const normalizedValue = Math.min(100, Math.max(0, value));

  const getColor = () => {
    if (color !== 'auto') return color;
    if (normalizedValue < 25) return 'error';
    if (normalizedValue < 50) return 'warning';
    if (normalizedValue < 75) return 'info';
    return 'success';
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          {label}
        </Typography>
        {showPercentage && (
          <Typography variant="body2" color="text.secondary" fontWeight={600}>
            {normalizedValue}%
          </Typography>
        )}
      </Box>
      
      <Tooltip
        title={stats ? `Выполнено: ${stats.completed} из ${stats.total}` : `${normalizedValue}%`}
        arrow
        placement="top"
      >
        <LinearProgress
          variant="determinate"
          value={normalizedValue}
          color={getColor()}
          sx={{
            height,
            borderRadius: height / 2,
            backgroundColor: 'rgba(0,0,0,0.1)',
            '& .MuiLinearProgress-bar': {
              borderRadius: height / 2,
              transition: animated ? 'transform 0.5s ease-in-out' : 'none'
            }
          }}
        />
      </Tooltip>

      {stats && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
          <Typography variant="caption" color="text.secondary">
            Выполнено: {stats.completed}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            В работе: {stats.inProgress}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Не начато: {stats.notStarted}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProgressBar;
