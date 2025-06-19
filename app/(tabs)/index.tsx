
import { SafeAreaView } from 'react-native-safe-area-context';

// import { Box } from '@/components/ui/box';
// import { Text } from "@/components/ui/text";
import { Button, ButtonText } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Button size="md" variant="solid" action="primary">
      <ButtonText>Hello World!
        
      </ButtonText>
      <Spinner size="small" color={"red"} />
    </Button>
    </SafeAreaView>
  );
}

