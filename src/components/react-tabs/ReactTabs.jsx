import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./react_tabs.css";


function ReactTabs() {
  return (
      <Tabs>
          <TabList>
              <Tab>Ламинатные тубы</Tab>
              <Tab>Экструзионные тубы</Tab>
              <Tab>Другая упаковка</Tab>
          </TabList>

          <TabPanel>
              <div className='grid grid-cols-5 gap-[30px]'>
                  <div className='w-full max-w-[500px] lg:max-w-[610px] hover:scale-[1.1] duration-300'><img className=' w-[300px] w-full max-h-[400px] rounded-[10px]' src="/images/1 1.png" alt="" /></div>
                  <div className='w-full max-w-[500px] lg:max-w-[610px] hover:scale-[1.1] duration-300'><img className=' w-[300px] w-full max-h-[400px] rounded-[10px]' src="/images/3 1.png" alt="" /></div>
                  <div className='w-full max-w-[500px] lg:max-w-[610px] hover:scale-[1.1] duration-300'><img className=' w-[300px] w-full max-h-[400px] rounded-[10px]' src="/images/4 1.png" alt="" /></div>
                  <div className='w-full max-w-[500px] lg:max-w-[610px] hover:scale-[1.1] duration-300'><img className=' w-[300px] w-full max-h-[400px] rounded-[10px]' src="/images/5 1.png" alt="" /></div>
                  <div className='w-full max-w-[500px] lg:max-w-[610px] hover:scale-[1.1] duration-300'><img className=' w-[300px] w-full max-h-[400px] rounded-[10px]' src="/images/6 1.png" alt="" /></div>
              </div>
          </TabPanel>
          <TabPanel>
              <div className='grid grid-cols-5 gap-[30px]'>
                  <div className='w-full max-w-[510px] hover:scale-[1.1] duration-300'><img className=' w-full h-[300px] lg:h-[400px] rounded-[10px]' src="/images/4 1.png" alt="" /></div>
                  <div className='w-full max-w-[510px] hover:scale-[1.1] duration-300'><img className=' w-full h-[300px] lg:h-[400px] rounded-[10px]' src="/images/6 1.png" alt="" /></div>
                  <div className='w-full max-w-[510px] hover:scale-[1.1] duration-300'><img className=' w-full h-[300px] lg:h-[400px] rounded-[10px]' src="/images/3 1.png" alt="" /></div>
                  <div className='w-full max-w-[510px] hover:scale-[1.1] duration-300'><img className=' w-full h-[300px] lg:h-[400px] rounded-[10px]' src="/images/5 1.png" alt="" /></div>
              </div>
              
          </TabPanel>
          <TabPanel>
              <div className='grid grid-cols-5 gap-[30px]'>
                  <div className='w-full max-w-[510px] hover:scale-[1.1] duration-300'><img className=' w-full h-[300px] lg:h-[400px] rounded-[10px]' src="/images/5 1.png" alt="" /></div>
                  <div className='w-full max-w-[510px] hover:scale-[1.1] duration-300'><img className=' w-full h-[300px] lg:h-[400px] rounded-[10px]' src="/images/4 1.png" alt="" /></div>
                  <div className='w-full max-w-[510px] hover:scale-[1.1] duration-300'><img className=' w-full h-[300px] lg:h-[400px] rounded-[10px]' src="/images/1 1.png" alt="" /></div>
              </div>
              
          </TabPanel>
      </Tabs>
  )
}

export default ReactTabs;