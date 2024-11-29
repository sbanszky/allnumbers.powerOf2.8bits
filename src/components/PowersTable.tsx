import React from 'react';

export default function PowersTable() {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-cyber-purple">
        <thead>
          <tr>
            <th className="text-left p-2 border-b border-cyber-mint/10">Exponent (n)</th>
            <th className="text-left p-2 border-b border-cyber-mint/10">2ⁿ</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2">0</td><td className="p-2">1</td></tr>
          <tr><td className="p-2">1</td><td className="p-2">2</td></tr>
          <tr><td className="p-2">2</td><td className="p-2">4</td></tr>
          <tr><td className="p-2">3</td><td className="p-2">8</td></tr>
          <tr><td className="p-2">4</td><td className="p-2">16</td></tr>
          <tr><td className="p-2">5</td><td className="p-2">32</td></tr>
          <tr><td className="p-2">6</td><td className="p-2">64</td></tr>
          <tr><td className="p-2">7</td><td className="p-2">128</td></tr>
          <tr><td className="p-2">8</td><td className="p-2">256</td></tr>
          <tr><td className="p-2">9</td><td className="p-2">512</td></tr>
          <tr><td className="p-2">10</td><td className="p-2">1,024</td></tr>
          <tr><td className="p-2">11</td><td className="p-2">2,048</td></tr>
          <tr><td className="p-2">12</td><td className="p-2">4,096</td></tr>
          <tr><td className="p-2">13</td><td className="p-2">8,192</td></tr>
          <tr><td className="p-2">14</td><td className="p-2">16,384</td></tr>
          <tr><td className="p-2">15</td><td className="p-2">32,768</td></tr>
          <tr><td className="p-2">16</td><td className="p-2">65,536</td></tr>
          <tr><td className="p-2">17</td><td className="p-2">131,072</td></tr>
          <tr><td className="p-2">18</td><td className="p-2">262,144</td></tr>
          <tr><td className="p-2">19</td><td className="p-2">524,288</td></tr>
          <tr><td className="p-2">20</td><td className="p-2">1,048,576</td></tr>
          <tr><td className="p-2">21</td><td className="p-2">2,097,152</td></tr>
          <tr><td className="p-2">22</td><td className="p-2">4,194,304</td></tr>
          <tr><td className="p-2">23</td><td className="p-2">8,388,608</td></tr>
          <tr><td className="p-2">24</td><td className="p-2">16,777,216</td></tr>
          <tr><td className="p-2">25</td><td className="p-2">33,554,432</td></tr>
          <tr><td className="p-2">26</td><td className="p-2">67,108,864</td></tr>
          <tr><td className="p-2">27</td><td className="p-2">134,217,728</td></tr>
          <tr><td className="p-2">28</td><td className="p-2">268,435,456</td></tr>
          <tr><td className="p-2">29</td><td className="p-2">536,870,912</td></tr>
          <tr><td className="p-2">30</td><td className="p-2">1,073,741,824</td></tr>
          <tr><td className="p-2">31</td><td className="p-2">2,147,483,648</td></tr>
          <tr><td className="p-2">32</td><td className="p-2">4,294,967,296</td></tr>
        </tbody>
      </table>
    </div>
  );
}