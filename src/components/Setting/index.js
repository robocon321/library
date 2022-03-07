import { View, ScrollView, Text, Switch } from 'react-native';
import React, {useContext} from 'react';

import Header from '../common/Header';
import Option from './Option';
import Break from '../common/Break';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import {AccountContext} from '../../contexts/AccountProvider';
import styles from './styles';

const SettingComponent = ({navigation, route}) => {
  const {resetAccount, state} = useContext(AccountContext)
  return (
    <View>
      <ScrollView>
        <Text style={styles.firstTitle}>TÀI KHOẢN</Text>
        {
          Object.keys(state.data).length ? 
          <View>
          <Option
            title='robocon321n'
            justifyContent='flex-start'
          />
          <Break />
          <Option 
            title='Chỉnh sửa tài khoản'
            justifyContent='flex-start'
            color='blue'
          />
          <Break />
          <Option 
            title='Đăng xuất'
            justifyContent='center'
            color='red'
            onPress={() => {
              resetAccount();
            }}
          />
          </View>
            :
            <Option 
              title='Đăng nhập /Tạo tài khoản'
              justifyContent='space-between'
              RightComponent={() => <Icon name='chevron-forward-outline' size={20} color='gray' />}
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
            />
        }
        <Text style={styles.title}>TIN CỦA BẠN</Text>
        <View>
          <Option 
            title='Danh sách theo dõi'
            justifyContent='space-between'
            RightComponent={() => <Icon name='chevron-forward-outline' size={20} color='gray' />}
          />
          <Text style={styles.title}>TIỆN ÍCH</Text>
          <Option 
            title='Lịch đấu - Kết quả bóng đá'
            justifyContent='space-between'
            RightComponent={() => 
              <Switch
                style={styles.switch}
                trackColor={colors.gray}
                thumbColor={colors.primary}
                ios_backgroundColor={colors.gray} />
            }
          />
          <Break />
          <Option 
            title='Lãi suất tiết kiệm'
            justifyContent='space-between'
            RightComponent={() => 
              <Switch
                style={styles.switch}
                trackColor={colors.gray}
                thumbColor={colors.primary}
                ios_backgroundColor={colors.gray} />
            }
          />
        </View>
        <Text style={styles.title}>HOẠT ĐỘNG</Text>
        <View>
          <Option 
            title='Bình luận của bạn'
            justifyContent='space-between'
            RightComponent={() => <Icon name='chevron-forward-outline' size={20} color='gray' />}
          />
          <Break />
          <Option 
            title='Tin đã lưu'
            justifyContent='space-between'
            RightComponent={() => <Icon name='chevron-forward-outline' size={20} color='gray' />}
          />
          <Break />
          <Option 
            title='Tin đã xem'
            justifyContent='space-between'
            RightComponent={() => <Icon name='chevron-forward-outline' size={20} color='gray' />}
          />
          <Text style={styles.title}>HOẠT ĐỘNG</Text>
          <Option 
            title='Chế độ đọc nhanh'
            justifyContent='space-between'
            RightComponent={() => 
              <Switch
                style={styles.switch}
                trackColor={colors.gray}
                thumbColor={colors.primary}
                ios_backgroundColor={colors.gray} />
            }
          />
          <Break />
          <Option 
            title='Gợi ý Podcast'
            justifyContent='space-between'
            RightComponent={() => 
              <Switch
                style={styles.switch}
                trackColor={colors.gray}
                thumbColor={colors.primary}
                ios_backgroundColor={colors.gray} />
            }
          />
          <Break />
          <Option 
            title='Chế độ nền tối'
            justifyContent='space-between'
            RightComponent={() => <Icon name='chevron-forward-outline' size={20} color='gray' />}
          />
          <Break />
          <Option 
            title='Tự động phát video'
            justifyContent='space-between'
            RightComponent={() => <Icon name='chevron-forward-outline' size={20} color='gray' />}
          />
          <Break />
          <Option 
            title='Thông báo'
            justifyContent='space-between'
            RightComponent={() => <Icon name='chevron-forward-outline' size={20} color='gray' />}
          />

        </View>
        <Text style={styles.title}>LIÊN HỆ</Text>
        <View>
          <Option 
            title='Gợi ý ứng dụng'
            justifyContent='flex-start'
            color='blue'
          />
          <Break />
          <Option 
            title='Thông tin tòa soạn'
            justifyContent='space-between'
            RightComponent={() => <Icon name='chevron-forward-outline' size={20} color='gray' />}
          />
          <Break />
          <Option 
            title='Thông tin quảng cáo'
            justifyContent='space-between'
            RightComponent={() => <Icon name='chevron-forward-outline' size={20} color='gray' />}
          />
        </View>

      </ScrollView>
      <View style={styles.header}>
        <Header 
            leftIcon='arrow-back-outline'
            title='Thiết lập'
            onLeftPress={() => {
              navigation.goBack();
            }}
          />
      </View>
    </View>
  )
}

export default SettingComponent