import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Image } from 'antd';
import { useMediaQuery, useTheme } from '@mui/material';
import { itemData } from './itemData';

export default function MasonryImageList() {

  const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{  height: "auto", width: isSmallScreen ? '100%' : '80%', overflowY: 'auto', paddingTop: 10 }}>
      <ImageList variant="masonry" cols={isSmallScreen ? 2 : 5} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <Image
              srcSet={`${item.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=300&fit=crop&auto=format`}
              alt={item.title}
              width="100%"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

